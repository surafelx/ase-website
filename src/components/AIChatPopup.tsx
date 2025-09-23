import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm AgriSun's AI assistant. How can I help you with solar irrigation solutions today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    "hello": "Hello! Welcome to AgriSun Ethiopia. I'm here to help you with information about our solar irrigation solutions.",
    "services": "We offer comprehensive services including: Borehole Drilling, Solar-Powered Pump Installation, Efficient Irrigation Systems, Solar-Powered Grain Milling, Training & Knowledge Transfer, and Maintenance & Technical Support.",
    "price": "Our pricing varies based on your specific needs, farm size, and location. Please contact us at +251 9 41 97 00 26 for a personalized quote.",
    "contact": "You can reach us at: Phone: +251 9 41 97 00 26, Email: contact@agrisunethiopia.com, Address: Nigat Business Center, 11th Floor, 11-04, Addis Ababa, Ethiopia",
    "about": "AgriSun Ethiopia specializes in providing affordable, reliable solar-powered irrigation solutions for small and marginal farmers across Ethiopia. We've been transforming agriculture since 2023.",
    "warranty": "We provide comprehensive warranty coverage on all solar components, insurance coverage against weather damage, and quick replacement of faulty components.",
    "training": "Yes! We provide comprehensive training programs for farmers and local technicians, including farmer training programs, technical skill development, and local technician certification.",
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return "Thank you for your question! For detailed information about our solar irrigation solutions, please contact our team at +251 9 41 97 00 26 or visit our office at Nigat Business Center, Addis Ababa. Our experts will be happy to assist you!";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-primary hover:bg-agriculture-green-dark shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 h-96"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full shadow-2xl border-0">
              <CardHeader className="bg-gradient-primary text-white rounded-t-lg p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    AgriSun AI Assistant
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-1 h-auto"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-white/90 text-xs">
                  Ask me about solar irrigation solutions
                </p>
              </CardHeader>
              
              <CardContent className="p-0 h-full flex flex-col">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.isUser
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Input Area */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 text-sm"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-primary hover:bg-agriculture-green-dark"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatPopup;