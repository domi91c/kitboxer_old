class ApplicationController < ActionController::Base
  before_action :better_errors_hack, if: -> {Rails.env.development?}
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

  def better_errors_hack
    request.env['puma.config'].options.user_options.delete :app
  end
end
