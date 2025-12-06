import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface AccountDetailsCardProps {
  className?: string;
}

export const AccountDetailsCard: React.FC<AccountDetailsCardProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const accountDetails = {
    name: 'John Doe',
    currency: 'US Dollar',
    accountNumber: '0000000000',
    routingNumber: '00000',
    address: '641 Western Avenue, Suite 25, Bridgewater, 35001, Georgia VA',
  };

  return (
    <div className={`backdrop-blur-xl bg-black/40 border border-white/20 rounded-3xl p-6 shadow-2xl w-full max-w-md animate-fade-up ${className}`}>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('domestic')}
          className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'domestic'
              ? 'bg-white/20 text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10'
          }`}
        >
          Domestic
        </button>
        <button
          onClick={() => setActiveTab('international')}
          className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'international'
              ? 'bg-white/20 text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10'
          }`}
        >
          International
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-white/60 text-xs mb-1.5 block">{accountDetails.name}</label>
          <div className="bg-white/10 rounded-lg px-3 py-2.5 text-white text-sm">
            {accountDetails.currency}
          </div>
        </div>

        <div>
          <label className="text-white/60 text-xs mb-1.5 block">Account number</label>
          <div className="bg-white/10 rounded-lg px-3 py-2.5 flex items-center justify-between">
            <span className="text-white text-sm font-mono">{accountDetails.accountNumber}</span>
            <button
              onClick={() => copyToClipboard(accountDetails.accountNumber, 'account')}
              className="text-white/60 hover:text-white transition-colors"
            >
              {copiedField === 'account' ? (
                <Check size={16} className="text-piko-violet" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="text-white/60 text-xs mb-1.5 block">Routing number</label>
          <div className="bg-white/10 rounded-lg px-3 py-2.5 flex items-center justify-between">
            <span className="text-white text-sm font-mono">{accountDetails.routingNumber}</span>
            <button
              onClick={() => copyToClipboard(accountDetails.routingNumber, 'routing')}
              className="text-white/60 hover:text-white transition-colors"
            >
              {copiedField === 'routing' ? (
                <Check size={16} className="text-piko-violet" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="text-white/60 text-xs mb-1.5 block">Address</label>
          <div className="bg-white/10 rounded-lg px-3 py-2.5 flex items-start justify-between">
            <span className="text-white text-sm leading-relaxed pr-2">{accountDetails.address}</span>
            <button
              onClick={() => copyToClipboard(accountDetails.address, 'address')}
              className="text-white/60 hover:text-white transition-colors flex-shrink-0 mt-0.5"
            >
              {copiedField === 'address' ? (
                <Check size={16} className="text-piko-violet" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
