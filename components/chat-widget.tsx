"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Send, ChevronDown, Sparkles, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
    role: "user" | "assistant"
    content: string
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Halo! 👋 Saya RaffiBot, asisten AI pintar dari RaffiTech. Saya siap membantu 24 jam! Ada pertanyaan seputar layanan IT kami?"
        }
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [displayedText, setDisplayedText] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, displayedText])

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    // Typing animation effect
    const typeMessage = (text: string, callback: () => void) => {
        setIsTyping(true)
        setDisplayedText("")
        let index = 0
        const speed = 12 // faster typing

        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1))
                index++
            } else {
                clearInterval(timer)
                setIsTyping(false)
                callback()
            }
        }, speed)
    }

    const sendMessage = async () => {
        if (!input.trim() || isLoading || isTyping) return

        const userMessage: Message = { role: "user", content: input.trim() }
        setMessages(prev => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            })

            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }

            setIsLoading(false)

            // Type out the response
            typeMessage(data.message, () => {
                setMessages(prev => [...prev, { role: "assistant", content: data.message }])
                setDisplayedText("")
            })
        } catch (error) {
            console.error("Chat error:", error)
            setIsLoading(false)
            const errorMsg = "Maaf, terjadi kesalahan. Silakan hubungi kami langsung via WhatsApp di +62 895-3289-49434"
            typeMessage(errorMsg, () => {
                setMessages(prev => [...prev, { role: "assistant", content: errorMsg }])
                setDisplayedText("")
            })
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <>
            {/* Floating Action Button - Sleek Glassmorphism Design */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
                    "flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full",
                    "bg-gradient-to-r from-primary to-primary/80",
                    "text-white font-medium text-sm",
                    "shadow-lg shadow-primary/30",
                    "transition-all duration-500 ease-out",
                    "hover:shadow-xl hover:shadow-primary/40 hover:scale-105",
                    "active:scale-95",
                    "backdrop-blur-sm",
                    isOpen && "scale-0 opacity-0 pointer-events-none"
                )}
            >
                <div className="relative">
                    <Bot className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse border-2 border-white" />
                </div>
                <span className="hidden sm:inline">RaffiBot AI</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
            </button>

            {/* Chat Window - Premium Glassmorphism */}
            <div
                className={cn(
                    "fixed z-50 transition-all duration-500 ease-out",
                    // Mobile: Bottom sheet style, not full screen
                    "bottom-0 left-0 right-0 mx-4 mb-4 sm:mx-0 sm:left-auto",
                    // Desktop: Bottom right positioned
                    "sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-auto sm:max-h-[85vh]",
                    // Animation origins
                    "origin-bottom-right",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 translate-y-8 pointer-events-none"
                )}
            >
                <Card className={cn(
                    "flex flex-col h-[60vh] sm:h-[520px] overflow-hidden",
                    "border",
                    "bg-background/95 backdrop-blur-xl",
                    "shadow-2xl shadow-black/20",
                    "rounded-2xl sm:rounded-3xl"
                )}>
                    {/* Header - Animated Gradient */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent animate-gradient-x" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />

                        <div className="relative p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center
                                                    shadow-lg shadow-black/10 transition-transform duration-300 hover:scale-110">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base flex items-center gap-1.5">
                                        RaffiBot
                                        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                                    </h3>
                                    <p className="text-xs text-white/80 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        AI Assistant • Online 24/7
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area - Smooth Scroll */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-muted/20 to-transparent
                                    scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex animate-in slide-in-from-bottom-2 fade-in duration-300",
                                    message.role === "user" ? "justify-end" : "justify-start"
                                )}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div
                                    className={cn(
                                        "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                                        "transition-all duration-300 hover:shadow-md",
                                        message.role === "user"
                                            ? "bg-gradient-to-r from-primary to-primary/90 text-white rounded-br-md shadow-lg shadow-primary/20"
                                            : "bg-card border border-border/50 shadow-sm rounded-bl-md hover:border-primary/20"
                                    )}
                                >
                                    {message.role === "assistant" && (
                                        <div className="flex items-center gap-1.5 mb-1.5 text-xs text-muted-foreground">
                                            <Bot className="w-3 h-3" />
                                            <span>RaffiBot</span>
                                        </div>
                                    )}
                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}

                        {/* Loading State - Fancy Dots */}
                        {isLoading && (
                            <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="bg-card border border-border/50 shadow-sm rounded-2xl rounded-bl-md px-4 py-3">
                                    <div className="flex items-center gap-1.5 mb-2 text-xs text-muted-foreground">
                                        <Bot className="w-3 h-3" />
                                        <span>RaffiBot sedang mengetik...</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Typing Animation Display */}
                        {isTyping && displayedText && (
                            <div className="flex justify-start animate-in fade-in duration-200">
                                <div className="max-w-[85%] bg-card border border-border/50 shadow-sm rounded-2xl rounded-bl-md px-4 py-3 text-sm leading-relaxed">
                                    <div className="flex items-center gap-1.5 mb-1.5 text-xs text-muted-foreground">
                                        <Bot className="w-3 h-3" />
                                        <span>RaffiBot</span>
                                    </div>
                                    <p className="whitespace-pre-wrap">
                                        {displayedText}
                                        <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
                                    </p>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area - Modern Floating Style */}
                    <div className="p-3 sm:p-4 border-t border-border/50 bg-background/80 backdrop-blur-sm">
                        <div className="flex gap-2 items-center">
                            <div className="relative flex-1">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ketik pesan..."
                                    className={cn(
                                        "w-full px-4 py-3 pr-4 rounded-2xl",
                                        "border border-border/50 bg-muted/30",
                                        "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50",
                                        "text-sm placeholder:text-muted-foreground/60",
                                        "transition-all duration-300",
                                        "disabled:opacity-50"
                                    )}
                                    disabled={isLoading || isTyping}
                                />
                            </div>
                            <Button
                                onClick={sendMessage}
                                disabled={!input.trim() || isLoading || isTyping}
                                size="icon"
                                className={cn(
                                    "rounded-2xl h-12 w-12 shrink-0",
                                    "bg-gradient-to-r from-primary to-primary/90",
                                    "shadow-lg shadow-primary/30",
                                    "transition-all duration-300",
                                    "hover:shadow-xl hover:shadow-primary/40 hover:scale-105",
                                    "active:scale-95",
                                    "disabled:opacity-50 disabled:shadow-none disabled:scale-100"
                                )}
                            >
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Backdrop for mobile - Blur Effect */}
            <div
                className={cn(
                    "fixed inset-0 z-40 sm:hidden",
                    "bg-black/40 backdrop-blur-sm",
                    "transition-all duration-500",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Custom Styles */}
            <style jsx global>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </>
    )
}
