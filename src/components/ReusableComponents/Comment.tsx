
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Trash2 } from 'lucide-react';
import { useState } from "react";

export default function Comment() {
    // State to manage if the comment is visible or not
    const [isVisible, setIsVisible] = useState(true);
  
    // Function to handle the deletion (hiding) of the comment
    const handleDelete = () => {
      setIsVisible(false);
    };
  
    // Only render the comment if isVisible is true
    if (!isVisible) return null;
  return (

    <div className="flex flex-col items-center space-y-3">
                        <div className="inline-flex w-full items-center justify-start space-x-2">
                          <Avatar>
                            <AvatarImage 
                              alt="User avatar"
                              src="/placeholder.svg?height=40&width=40"
                            />
                            <AvatarFallback>ST</AvatarFallback>
                          </Avatar>
                          <p className="font-semibold">Saint Tata</p>
                        </div>
                        <p className="text-sm">
                          Their portfolio showcases a diverse range of projects,
                          from sleek tech startup branding to socially conscious
                          design initiatives. What sets Alex apart is their
                          ability to infuse modern aesthetics with a touch of
                          raw authenticity, drawing inspiration from urban
                          landscapes and street art. With a keen eye for detail
                          and a commitment to simplicity, Alex crafts visually
                          compelling solutions that leave a lasting impression.
                        </p>
                        <button onClick={handleDelete}><Trash2 /></button>
        </div>
  
  );
};