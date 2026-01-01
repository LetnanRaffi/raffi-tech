"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Send, X, ChevronDown, Headphones } from "lucide-react"
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
            content: "Halo! Selamat datang di RaffiTech Solutions. Ada yang bisa kami bantu hari ini?"
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
        const speed = 15 // milliseconds per character

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
            {/* Chat Button - Professional Style */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300",
                    "bg-primary hover:bg-primary/90 text-primary-foreground",
                    "hover:shadow-xl hover:scale-105",
                    isOpen && "scale-0 opacity-0"
                )}
            >
                <Headphones className="w-5 h-5" />
                <span className="font-medium text-sm">Butuh Bantuan?</span>
            </button>

            {/* Chat Window with Dropdown Animation */}
            <div
                className={cn(
                    "fixed bottom-6 right-6 z-50 w-[380px] transition-all duration-300 ease-out origin-bottom-right",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                )}
            >
                <Card className="flex flex-col h-[520px] shadow-2xl border overflow-hidden">
                    {/* Header - Clean Professional */}
                    <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Customer Support</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="text-xs opacity-80">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex",
                                    message.role === "user" ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                                        message.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-br-sm"
                                            : "bg-card border shadow-sm rounded-bl-sm"
                                    )}
                                >
                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}

                        {/* Loading State */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-card border shadow-sm rounded-2xl rounded-bl-sm px-4 py-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Typing Animation Display */}
                        {isTyping && displayedText && (
                            <div className="flex justify-start">
                                <div className="max-w-[85%] bg-card border shadow-sm rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm leading-relaxed">
                                    <p className="whitespace-pre-wrap">
                                        {displayedText}
                                        <span className="inline-block w-0.5 h-4 bg-foreground/60 ml-0.5 animate-pulse"></span>
                                    </p>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area - Clean Design */}
                    <div className="p-3 border-t bg-background">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ketik pesan..."
                                className="flex-1 px-4 py-2.5 rounded-full border bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm transition-all"
                                disabled={isLoading || isTyping}
                            />
                            <Button
                                onClick={sendMessage}
                                disabled={!input.trim() || isLoading || isTyping}
                                size="icon"
                                className="rounded-full h-10 w-10 shrink-0"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
