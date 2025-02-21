package models

import (
	"time"
)

type Wishlist struct {
	ID        uint      `gorm:"primaryKey"`
	UserID    uint      `json:"user_id"`
	User      User      `gorm:"foreignKey:UserID"`
	ProductID uint      `json:"product_id"`
	Product   Product   `gorm:"foreignKey:ProductID"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
}
