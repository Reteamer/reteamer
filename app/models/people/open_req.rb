# == Schema Information
#
# Table name: people
#
#  id                   :bigint           not null, primary key
#  image_url            :text
#  job_family_entry_key :string
#  supervisor_key       :string
#  title                :string
#  type                 :string
#  created_at           :datetime
#  account_id           :integer          not null
#
module People
  class OpenReq < Person
    self.ignored_columns = ["first_name", "last_name", "employee_id", "email"]

    def name
      "[Unfilled]"
    end

    def employee_id
      ""
    end
  end
end
