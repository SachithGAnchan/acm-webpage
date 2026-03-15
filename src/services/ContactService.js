/**
 * Mock Service for Contact Form Database Submission
 */
export const ContactService = {
  submitMessage: async (formData) => {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would be an API call to Firebase, Supabase, etc.
    console.log("Submitting to database:", formData);
    
    // For now, we'll mock a successful response
    return {
      success: true,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString()
    };
  }
};
