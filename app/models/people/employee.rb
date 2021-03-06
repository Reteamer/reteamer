# == Schema Information
#
# Table name: people
#
#  id             :bigint           not null, primary key
#  email          :string
#  first_name     :string
#  image_url      :text
#  last_name      :string
#  supervisor_key :string
#  title          :string
#  type           :string
#  created_at     :datetime
#  account_id     :integer          not null
#  employee_id    :string
#  job_family_id  :bigint
#
module People
  class Employee < Person
    validates_presence_of :first_name
  end
end
