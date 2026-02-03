import { useState, useCallback, useEffect } from 'react';
import { submitWaitingList } from '../services/waitingListAPI';
import { WaitingListFormData } from '../types/waitingList';

export const useWaitingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  const canSubmit = useCallback(() => {
    if (!lastSubmissionTime) return true;
    const fiveMinutes = 5 * 60 * 1000;
    return Date.now() - lastSubmissionTime > fiveMinutes;
  }, [lastSubmissionTime]);

 const submitForm = useCallback(async (formData: WaitingListFormData, turnstileToken: string) => {
  if (!turnstileToken) {
    throw new Error('Turnstile verification is required');
  }

  setIsLoading(true);
  setError(null);

  try {
    const result = await submitWaitingList(formData, turnstileToken);
    const now = Date.now();
    setLastSubmissionTime(now);
    localStorage.setItem('pikosend_last_submission', now.toString());
    
    setSuccess(true);
    setSubmissionId(result.data?.id || null);
    return result;
  } catch (err: any) {
    setError(err.message || 'Submission failed. Please try again.');
    throw err;
  } finally {
    setIsLoading(false);
  }
}, []);

  const resetForm = useCallback(() => {
    setError(null);
    setSuccess(false);
    setSubmissionId(null);
  }, []);

  useEffect(() => {
    const lastSubmit = localStorage.getItem('pikosend_last_submission');
    if (lastSubmit) {
      const lastTime = parseInt(lastSubmit, 10);
      if (Date.now() - lastTime < 5 * 60 * 1000) {
        setLastSubmissionTime(lastTime);
      }
    }
  }, []);

  return {
    submitForm,
    resetForm,
    isLoading,
    error,
    success,
    submissionId,
    canSubmit: canSubmit(),
    lastSubmissionTime,
  };
};