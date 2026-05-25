import React, { useState } from 'react'
import { supabase } from '../utils/supabaseClient';
import { Mail, Share2, Loader2} from 'lucide-react';
import { type AuditResult } from '../utils/AuditEngine';

interface Props {
    auditData: AuditResult[];
}

const LeadCapture: React.FC<Props> = ({ auditData }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    const handleCaptureLead = async () => {
        setLoading(true);
        const {data, error} = await supabase
        .from('audits')
        .insert([{ email, audit_data: auditData }])
        .select();

        if(!error && data) {
            setShareUrl(`${window.location.origin}/share/${data[0].id}`);
        } else {
            console.error("Supabase Error:", error);
            alert("Error saving report: " + (error?.message || "Unknown error"));
        }
        setLoading(false);
    };

  return (
    <div className='max-w-5xl mx-auto mt-8 p-8 bg-white border border-gray-200 rounded-4xl shadow-lg text-center'>
        {!shareUrl ? (
            <>
            <h3 className='text-xl font-bold mb-2'>Claim your full report</h3>
            <p className='text-sm text-gray-500 mb-6'>Enter Your work email to get a shareable link and CFO-readt breakdown.</p>
            <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                <input type="email" placeholder='name@company.com'
                className='flex-1 p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <button 
                onClick={handleCaptureLead}
                disabled={loading || !email}
                className='bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50'>
                    {loading ? <Loader2 className='animate-spin' size={18}/> :
                    <Mail size={18}/>}
                    Get Report
                </button>
            </div>
            </>
        ) : (
            <div className='animate-in zoom-in-95 duration-500'>
                <div className='w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl'>✓</div>
                <h3 className='text-xl font-bold mb-2'>Your report is saved!</h3>
                <p className='text-sm text-gray-500 mb-4'>Copy the link below to share with your team:</p>
                <div className='p-3 bg-gray-50 border rounded-xl flex items-center justify-between gap-4 overflow-hidden'>
                    <code className='text-xs text-blue-600 truncate'>{shareUrl}</code>
                    <button
                    onClick={() => navigator.clipboard.writeText(shareUrl)}
                    className='p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                        <Share2 size={16}/>
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default LeadCapture