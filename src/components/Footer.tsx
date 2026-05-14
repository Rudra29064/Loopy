import React from "react";
import { Github, Mail, Heart, Linkedin, } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="bg-[#0a090f] backdrop-blur-sm border-t border-[#71717a] selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm">© 2025 ALL RIGHTS RESERVED BY LOOPY</div>

          <TooltipProvider>
            <div className="flex items-center space-x-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://github.com/Rudra29064" className="text-gray-400 hover:text-gray-200 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.linkedin.com/in/rudra-p-27268b345/" className="text-gray-400 hover:text-gray-200 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Linked In</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="mailto:rudradhirendrapatel@gmail.com" className="text-gray-400 hover:text-gray-200 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>

              <div className="text-gray-300 flex items-center">
                Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Rudra Patel
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
