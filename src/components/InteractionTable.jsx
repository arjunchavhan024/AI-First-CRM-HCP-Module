import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteInteraction } from '../redux/interactionSlice';
import { Trash2, Edit3, Heart, MessageSquare, Phone, Mail, Users } from 'lucide-react';

const InteractionTable = () => {
  const history = useSelector((state) => state.interaction.history);
  const dispatch = useDispatch();

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Meeting': return <Users className="w-4 h-4" />;
      case 'Call': return <Phone className="w-4 h-4" />;
      case 'Email': return <Mail className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive': return 'bg-green-100 text-green-700';
      case 'Neutral': return 'bg-slate-100 text-slate-700';
      case 'Negative': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="card overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-800 px-2">Interaction History</h3>
        <button className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold tracking-wider">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">HCP Name</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Sentiment</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                  {item.date}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-slate-800">{item.hcpName}</div>
                  <div className="text-[11px] text-slate-400">Cardiology Dept.</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded-md w-fit">
                    {getTypeIcon(item.type)}
                    <span className="text-xs font-medium">{item.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[11px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${getSentimentColor(item.sentiment)}`}>
                    {item.sentiment}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => dispatch(deleteInteraction(item.id))}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {history.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center opacity-40">
                    <MessageSquare className="w-12 h-12 mb-2" />
                    <p className="text-sm font-medium">No interactions found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InteractionTable;
