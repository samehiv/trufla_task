
module JsonResponse
  extend ActiveSupport::Concern
  include ActionController::Helpers

  included do
    helper_method :render_response

    rescue_from StandardError, with: :server_error_response
    rescue_from ActiveRecord::RecordInvalid, with: :validation_error_response
    rescue_from ActionController::ParameterMissing, with: :parameter_missing_error_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_error_response
  end

  def render_response(json, status = 200, message = '')
    json.status status
    json.data do
      yield if block_given?
    end
    json.message message
  end

  def render_json(status, options = {})
    render json: {status: status}.merge(options), status: status 
  end

  private

  def validation_error_response(exception)
    errors = exception.record.errors.full_messages
    render_json 422, error: 'Validation failed', errors: errors
  end

  def parameter_missing_error_response(exception)
    render_json 422, error: 'Validation failed', errors: exception.message
  end

  def record_not_found_error_response(exception)
    render_json 404, error: exception.message
  end

  def server_error_response(exception)
    bc = ActiveSupport::BacktraceCleaner.new
    bc.add_filter   { |line| line.gsub(Rails.root.to_s, '') }
    bc.add_silencer { |line| line =~ /puma|rubygems|gems/ }
    render_json 500, error: exception.message, errors: bc.clean(exception.backtrace)
  end
end
