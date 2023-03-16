export interface LocalType {
  local_id: number;
  local_index: string;
  local_entrance: string;
  ts_index: string;
  created_date: Date;
  modified_date: Date | null;
  local_name: string;
  local_number: number;
  monitor_number: number;
  local_type: number;
  local_area: number;
  local_plan_length: number;
  local_curr_length: number;
  local_process: number;
  local_description: string;
  record_date: Date;
  local_used: number;
  dig_seq: number;
  dig_length: number;
  dig_description: string;
  pcs_seq: number;
  pcs_prev_state: number;
  pcs_curr_state: number;
  pcs_description: string;
}
