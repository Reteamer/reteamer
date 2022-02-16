# == Schema Information
#
# Table name: people
#
#  id             :bigint           not null, primary key
#  image_url      :text
#  supervisor_key :string
#  type           :string
#  created_at     :datetime
#  account_id     :integer          not null
#  job_family_id  :bigint
#
module People
  class OpenReq < Person
    self.ignored_columns = ["first_name", "last_name", "employee_id", "email", "title"]

    def name
      "[Unfilled]"
    end

    def employee_id
      ""
    end

    def title
      job_family&.name
    end
  end
end
