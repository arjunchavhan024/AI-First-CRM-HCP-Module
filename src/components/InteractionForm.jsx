import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField, saveInteraction } from '../redux/interactionSlice';
import { Sparkles, Calendar, Clock, User, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

const InteractionForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.interaction.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({ field: name, value }));
  };

  const setSentiment = (sentiment) => {
    dispatch(updateFormField({ field: 'sentiment', value: sentiment }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(saveInteraction());
    alert('Interaction logged successfully!');
  };

  const sentiments = [
    { label: 'Positive', color: 'bg-green-100 text-green-700 border-green-200' },
    { label: 'Neutral', color: 'bg-slate-100 text-slate-700 border-slate-200' },
    { label: 'Negative', color: 'bg-red-100 text-red-700 border-red-200' },
  ];

  return (
    <div className="card p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Log HCP Interaction</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
            <Sparkles className="w-3.5 h-3.5" />
            AI Suggest
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">HCP Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                name="hcpName"
                value={form.hcpName}
                onChange={handleChange}
                placeholder="Search or select HCP..."
                className="input-field pl-10"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">Interaction Type</label>
            <select
              name="interactionType"
              value={form.interactionType}
              onChange={handleChange}
              className="input-field appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:1em_1em]"
              style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
            >
              <option>Meeting</option>
              <option>Call</option>
              <option>Conference</option>
              <option>Email</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="input-field pl-10"
              />
            </div>
          </div>
          <div>
            <label className="label">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="input-field pl-10"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="label">Interaction Notes / Summary</label>
          <div className="relative">
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Enter key discussion points..."
              className="input-field resize-none"
            ></textarea>
            <div className="absolute right-3 bottom-3 flex gap-2">
              <button type="button" className="p-1.5 text-slate-400 hover:text-primary transition-colors hover:bg-slate-50 rounded">
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <button type="button" className="text-[11px] font-medium text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
              <Sparkles className="w-3 h-3" /> Summarize Notes
            </button>
            <button type="button" className="text-[11px] font-medium text-slate-500 hover:text-primary flex items-center gap-1 transition-colors border-l border-slate-200 pl-2">
              <Sparkles className="w-3 h-3" /> Extract Key Points
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Topics Discussed</label>
            <input
              type="text"
              name="topicsDiscussed"
              value={form.topicsDiscussed}
              onChange={handleChange}
              placeholder="e.g. Product X, Pricing"
              className="input-field"
            />
          </div>
          <div>
            <label className="label">Materials Shared</label>
            <input
              type="text"
              name="materialsShared"
              value={form.materialsShared}
              onChange={handleChange}
              placeholder="e.g. Brochure, Sample"
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label className="label">HCP Sentiment</label>
          <div className="flex gap-3">
            {sentiments.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSentiment(s.label)}
                className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                  form.sentiment === s.label
                    ? `${s.color} ring-2 ring-offset-1 ring-primary/20`
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label">Follow-up Actions</label>
          <div className="relative">
            <CheckCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="followUp"
              value={form.followUp}
              onChange={handleChange}
              placeholder="What needs to happen next?"
              className="input-field pl-10"
            />
          </div>
        </div>

        <button type="submit" className="btn-primary w-full py-3 text-base flex items-center justify-center gap-2">
          Save Interaction
        </button>
      </form>
    </div>
  );
};

export default InteractionForm;
