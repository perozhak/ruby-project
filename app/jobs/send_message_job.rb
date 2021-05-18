class SendMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    # Do something later

    html = ApplicationController.render(
      partial: 'messages/theirs', 
      locals: { message: message }
    )

    ActionCable.server.broadcast("room_channel_#{message.room_id}", { html: html, message: message})
  end
end
