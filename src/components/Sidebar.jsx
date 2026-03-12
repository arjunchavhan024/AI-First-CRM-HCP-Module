import React from 'react';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings,
  ChevronLeft
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Dashboard', active: false },
    { icon: <Users className="w-5 h-5" />, label: 'HCP Directory', active: false },
    { icon: <Calendar className="w-5 h-5" />, label: 'Interactions', active: true },
    { icon: <FileText className="w-5 h-5" />, label: 'Materials', active: false },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'AI Insights', active: false },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 h-[calc(100vh-64px)] bg-white flex flex-col fixed left-0 hidden lg:flex">
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                item.active 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
