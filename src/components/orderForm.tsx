"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Loader2, CheckCircle, User, Phone, MapPin, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
});

// Replace this with your actual Google Apps Script web app URL
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxXmcksofbCZWpeIjG7xDh62DRJ8WO0FAZqjcqtAzkSBoq-3hxDeSUWTLkPbNaqY-dJcQ/exec";

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Format data for Google Sheet submission
      const formData = new FormData();
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('phoneNumber', values.phoneNumber);
      formData.append('address', values.address);
      formData.append('timestamp', new Date().toISOString());
      
      // Submit to Google Sheet
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for Google Apps Script
      });
      
      // Since we're using no-cors, we can't check response status
      // We'll assume success if no error is thrown
      
      toast({
        title: "Order submitted successfully!",
        description: "Your information has been recorded.",
      });
      
      setIsSuccess(true);
      console.log("Form submitted:", values);
      
      // Reset form after success
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to submit form. Please try again.");
      
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl mt-12">
      {/* Success overlay */}
      {isSuccess && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg z-10 animate-in fade-in duration-300">
          <div className="animate-float">
            <CheckCircle className="w-20 h-20 text-green-500 mb-4 animate-pulse-glow" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
          <p className="text-muted-foreground mt-2">Your order has been received</p>
        </div>
      )}
      
      {/* Form header with gradient background */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white text-center">
        <h2 className="text-2xl font-bold tracking-tight">Complete Your Order</h2>
        <p className="text-white/80 mt-1">Please provide your details below</p>
        
        {/* Trust badges */}
        <div className="flex justify-center mt-4 gap-2">
          <Badge className="bg-white/20 text-white hover:bg-white/30">Secure</Badge>
          <Badge className="bg-white/20 text-white hover:bg-white/30">100% Satisfaction</Badge>
          <Badge className="bg-white/20 text-white hover:bg-white/30">Money-back Guarantee</Badge>
        </div>
      </div>
      
      <div className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {submitError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                {submitError}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base font-medium text-gray-700">
                      <User className="w-4 h-4 text-blue-600" />
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John" 
                        {...field} 
                        className="border-blue-200 transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-sm text-gray-900" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base font-medium text-gray-700">
                      <User className="w-4 h-4 text-blue-600" />
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Doe" 
                        {...field} 
                        className="border-blue-200 transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-sm text-gray-900" 
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-base font-medium text-gray-700">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+1234567890" 
                      type="tel" 
                      inputMode="numeric"
                      pattern="[0-9]+"
                      onKeyPress={(e) => {
                        if (!/[0-9+]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      {...field} 
                      className="border-blue-200 transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-sm text-gray-900" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-base font-medium text-gray-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="123 Main St, City, Country" 
                      {...field} 
                      className="border-blue-200 transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 shadow-sm text-gray-900" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className={cn(
                "w-full h-12 text-base font-medium",
                "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700",
                "text-white text-lg py-6 rounded-xl shadow-lg",
                "transform hover:scale-[1.02] transition-all duration-300",
                "relative overflow-hidden"
              )}
              disabled={isSubmitting}
              data-cursor-variant={isSubmitting ? "loading" : "hover"}
            >
              <span className={cn(
                "inline-flex items-center gap-2 transition-all duration-300",
                isSubmitting ? "opacity-0" : "opacity-100"
              )}>
                Submit Order
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              
              {isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  <span>Processing...</span>
                </span>
              )}
            </Button>
            
            {/* Trust message */}
            <div className="text-center text-sm text-gray-500 mt-4">
              <p className="flex items-center justify-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Your information is secure and will not be shared
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}