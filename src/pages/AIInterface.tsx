import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Can you provide the timetable?",
    },
    {
      role: "assistant",
      content:
        "I'll be delighted to help! Your timetable is from Monday to Friday: 9 am and 5 pm. A new workshop is also added.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thank you for your question! I'm here to help you with any queries.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">AI Interface</h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-6 min-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "assistant" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "user" && (
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-muted">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card
                  className={`max-w-[80%] ${
                    message.role === "assistant"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card"
                  }`}
                >
                  <CardContent className="p-4">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </CardContent>
                </Card>
                {message.role === "assistant" && (
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about your campus..."
              className="flex-1"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AIInterface;
