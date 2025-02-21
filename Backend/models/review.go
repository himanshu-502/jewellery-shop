package models

import (
	"time"
)

type Review struct {
	ID        uint      `gorm:"primaryKey"`
	UserID    uint      `json:"user_id"`
	User      User      `gorm:"foreignKey:UserID"`
	ProductID uint      `json:"product_id"`
	Product   Product   `gorm:"foreignKey:ProductID"`
	Rating    int       `json:"rating"`
	Comment   *string   `json:"comment"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
}
