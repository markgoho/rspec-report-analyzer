export interface RspecExample {
  id: string;
  description: string;
  full_description: string;
  status: 'pending' | 'passed';
  file_path: string;
  line_number: number;
  run_time: number;
  pending_message: string | null;
}
