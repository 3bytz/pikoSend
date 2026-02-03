import React from 'react';
import { Shield, Lock, Mail } from 'lucide-react';

export const PrivacyNotice: React.FC = () => {
  return (
    <div className="bg-piko-soft-grey/50 rounded-2xl p-6 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-6 h-6 text-piko-purple" />
        <h4 className="font-semibold text-piko-black">Your Privacy Matters</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-start gap-2">
          <Lock className="w-4 h-4 text-piko-purple mt-0.5 flex-shrink-0" />
          <span className="text-piko-medium-grey">
            Your data is encrypted and never shared with third parties
          </span>
        </div>
        
        <div className="flex items-start gap-2">
          <Mail className="w-4 h-4 text-piko-purple mt-0.5 flex-shrink-0" />
          <span className="text-piko-medium-grey">
            We only send relevant updates. Unsubscribe anytime
          </span>
        </div>
        
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-piko-purple mt-0.5 flex-shrink-0" />
          <span className="text-piko-medium-grey">
            GDPR compliant. You control your data
          </span>
        </div>
      </div>
    </div>
  );
};