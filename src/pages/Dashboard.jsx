import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InteractionForm from '../components/InteractionForm';
import ChatAssistant from '../components/ChatAssistant';
import InteractionTable from '../components/InteractionTable';
import { Layout, MessageSquare, PlusCircle, History, Filter } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="min-h-screen flex flex-col bg-background font-inter">
      <Navbar />
      
      <div className="flex flex-1 relative">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-4 md:p-6 lg:p-8 overflow-y-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                HCP Interaction Module
                <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider">Enterprise</span>
              </h1>
              <p className="text-slate-500 text-sm mt-1">Manage and log your healthcare professional engagements efficiently.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-primary/20">
                <PlusCircle className="w-4 h-4" />
                New Schedule
              </button>
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="lg:hidden flex mb-6 p-1 bg-slate-100 rounded-xl">
            <button 
              onClick={() => setActiveTab('form')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === 'form' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              Log Form
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === 'chat' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              AI Assistant
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeTab === 'history' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'
              }`}
            >
              <History className="w-4 h-4" />
              History
            </button>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left/Form Panel */}
            <div className={`lg:col-span-7 xl:col-span-8 space-y-6 ${
              activeTab !== 'form' ? 'hidden lg:block' : ''
            }`}>
              <InteractionForm />
            </div>

            {/* Right/Chat Panel */}
            <div className={`lg:col-span-5 xl:col-span-4 h-[600px] lg:h-auto ${
              activeTab !== 'chat' ? 'hidden lg:block' : ''
            }`}>
              <ChatAssistant />
            </div>

            {/* History Table - Full Width Below */}
            <div className={`lg:col-span-12 mt-6 ${
              activeTab === 'history' ? 'block' : 'hidden lg:block'
            }`}>
              <InteractionTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
