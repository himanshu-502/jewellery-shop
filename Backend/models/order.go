package models

import (
	"time"
)

type Order struct {
	ID        uint        `gorm:"primaryKey"`
	UserID    uint        `json:"user_id"`
	User      User        `gorm:"foreignKey:UserID"`
	Address   string      `json:"address"`
	Total     float64     `json:"total"`
	Status    string      `gorm:"default:In Cart" json:"status"`
	CreatedAt time.Time   `gorm:"autoCreateTime"`
	Items     []OrderItem `gorm:"foreignKey:OrderID"`
}
