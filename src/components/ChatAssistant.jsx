import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, setIsTyping } from '../redux/chatSlice';
import { updateFormField } from '../redux/interactionSlice';
import { Send, Bot, User, Sparkles, Wand2, FileEdit, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatAssistant = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { messages, isTyping } = useSelector((state) => state.chat);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, type: 'user' };
    dispatch(addMessage(userMessage));
    setInput('');

    // Simulate AI thinking
    dispatch(setIsTyping(true));
    setTimeout(() => {
      dispatch(setIsTyping(false));
      const aiResponse = {
        text: `I've analyzed your message. I can help you log this: 
        HCP: Dr. Smith
        Product: Product X
        Action: Shared brochure
        Sentiment: Positive
        Would you like me to fill the form for you?`,
        type: 'ai'
      };
      dispatch(addMessage(aiResponse));
    }, 1500);
  };

  const autofillForm = () => {
    dispatch(updateFormField({ field: 'hcpName', value: 'Dr. John Smith' }));
    dispatch(updateFormField({ field: 'notes', value: 'Discussed Product X efficacy and shared a brochure. He seemed interested.' }));
    dispatch(updateFormField({ field: 'sentiment', value: 'Positive' }));
    dispatch(updateFormField({ field: 'topicsDiscussed', value: 'Product X Efficacy' }));
    dispatch(updateFormField({ field: 'materialsShared', value: 'Brochure' }));
    
    dispatch(addMessage({ 
      text: "Form autofilled based on our conversation! You can now review and save it.", 
      type: 'ai' 
    }));
  };

  return (
    <div className="card h-full flex flex-col overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-1.5 rounded-lg">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 leading-none">AI Assistant</h3>
            <span className="text-[10px] text-slate-500 font-medium">Ready to help log interaction</span>
          </div>
        </div>
        <Sparkles className="w-4 h-4 text-amber-500" />
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((msg, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id || idx}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.type === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-primary/10 text-primary'
              }`}>
                {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                msg.type === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2 items-center text-slate-400">
              <div className="bg-slate-100 p-2 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex gap-2 mb-3 flex-wrap">
          <button 
            onClick={autofillForm}
            className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-all flex items-center gap-1.5"
          >
            <Wand2 className="w-3 h-3" /> Log Interaction
          </button>
          <button className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-all flex items-center gap-1.5">
            <CheckCircle className="w-3 h-3" /> Generate Summary
          </button>
          <button className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-all flex items-center gap-1.5">
            <FileEdit className="w-3 h-3" /> Edit Interaction
          </button>
        </div>
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="Describe interaction..."
            className="input-field pr-12 min-h-[44px] py-3 max-h-32"
            rows="1"
          ></textarea>
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="absolute right-2 bottom-2 p-1.5 bg-primary text-white rounded-lg disabled:opacity-50 hover:bg-blue-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
