class User < ApplicationRecord
  before_create :set_nickname

  has_many :entries, dependent: :destroy
  has_many :messages, dependent: :destroy

  has_many :community_members, dependent: :destroy
  has_many :communities, through: :community_members

  has_many :community_requests, dependent: :destroy

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Automatically set a nickname when a new user is created.
  def set_nickname
    self.nickname = email.gsub(/@.*/, "")
  end
end
