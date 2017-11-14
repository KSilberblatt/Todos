class StaticPagesController < ApplicationController
  def root
    render inline: '<div id="content"></div>'
  end
end
