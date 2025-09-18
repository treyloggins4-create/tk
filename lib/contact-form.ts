import { supabase, ContactSubmission } from './supabase'

export async function submitContactForm(formData: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  try {
    // Try to sign in anonymously first
    const { data: authData, error: authError } = await supabase.auth.signInAnonymously()
    
    if (authError) {
      console.error('Auth error:', authError)
      // If anonymous auth fails, try without it
    }

    // Insert the form data
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select()

    if (error) {
      console.error('Error submitting form:', error)
      
      // If RLS error, try with service role (this would require service role key)
      if (error.message.includes('row-level security')) {
        throw new Error('Database access denied. Please contact support.')
      }
      
      throw new Error(error.message)
    }

    return { success: true, data: data?.[0] }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error: error instanceof Error ? error.message : 'An error occurred' }
  }
}

export async function getContactSubmissions() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching submissions:', error)
      throw new Error(error.message)
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return { success: false, error: error instanceof Error ? error.message : 'An error occurred' }
  }
}

export async function updateSubmissionStatus(id: string, status: ContactSubmission['status']) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Error updating status:', error)
      throw new Error(error.message)
    }

    return { success: true, data: data?.[0] }
  } catch (error) {
    console.error('Error updating status:', error)
    return { success: false, error: error instanceof Error ? error.message : 'An error occurred' }
  }
}
