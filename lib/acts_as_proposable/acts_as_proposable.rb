# frozen_string_literal: true

# Borrowed heavily from acts_as_tenant

require "request_store"

require_relative "version"
require_relative "errors"
require_relative "configuration"
require_relative "controller_extensions"
require_relative "model_extensions"
require_relative "plannable_helper"

module ActsAsProposable
  @@configuration = nil
  @@proposal_klass = nil
  @@models_with_global_records = []

  class << self
    attr_accessor :test_proposal
    attr_writer :default_proposal
  end

  def self.configure
    @@configuration = Configuration.new
    yield configuration if block_given?
    configuration
  end

  def self.configuration
    @@configuration || configure
  end

  def self.set_proposal_klass(klass)
    @@proposal_klass = klass
  end

  def self.proposal_klass
    @@proposal_klass
  end

  def self.models_with_global_records
    @@models_with_global_records
  end

  def self.add_global_record_model(model)
    @@models_with_global_records.push(model)
  end

  def self.fkey
    "#{@@proposal_klass}_id"
  end

  def self.pkey
    ActsAsProposable.configuration.pkey
  end

  def self.polymorphic_type
    "#{@@proposal_klass}_type"
  end

  def self.current_proposal=(proposal)
    RequestStore.store[:current_proposal] = proposal
  end

  def self.current_proposal
    RequestStore.store[:current_proposal] || test_proposal || default_proposal
  end

  def self.unscoped=(unscoped)
    RequestStore.store[:acts_as_proposal_unscoped] = unscoped
  end

  def self.unscoped
    RequestStore.store[:acts_as_proposal_unscoped]
  end

  def self.unscoped?
    !!unscoped
  end

  def self.default_proposal
    @default_proposal unless unscoped
  end

  def self.with_proposal(proposal, &block)
    raise ArgumentError, "block required" if block.nil?

    old_proposal = current_proposal
    self.current_proposal = proposal
    value = block.call
    value
  ensure
    self.current_proposal = old_proposal
  end

  def self.without_proposal(&block)
    raise ArgumentError, "block required" if block.nil?

    old_proposal = current_proposal
    old_unscoped = unscoped

    self.current_proposal = nil
    self.unscoped = true
    value = block.call
    value
  ensure
    self.current_proposal = old_proposal
    self.unscoped = old_unscoped
  end
end

ActiveSupport.on_load(:active_record) do |base|
  base.include ActsAsProposable::ModelExtensions
end

ActiveSupport.on_load(:action_controller) do |base|
  base.extend ActsAsProposable::ControllerExtensions
  base.include ActsAsProposable::PlannableHelper
end

ActiveSupport.on_load(:action_view) do |base|
  base.include ActsAsProposable::PlannableHelper
end
