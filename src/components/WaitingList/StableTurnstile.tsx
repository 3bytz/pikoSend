import { TurnstileWidget } from "../TurnstileWidget";

const StableTurnstile: React.FC<{
  onVerify: (token: string) => void;
  onError: () => void;
  onExpire: () => void;
  enabled: boolean;
}> = ({ onVerify, onError, onExpire, enabled }) => {
  if (!enabled) return null;

  return (
    <TurnstileWidget
      sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY || ""}
      onVerify={onVerify}
      onError={onError}
      onExpire={onExpire}
    />
  );
};
export default StableTurnstile;