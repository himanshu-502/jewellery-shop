package models

import (
	"time"
)

type Category struct {
	ID          uint      `gorm:"primaryKey"`
	Name        string    `gorm:"unique" json:"name"`
	ImageBanner []byte    `json:"image_banner"`
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	Products    []Product `gorm:"many2many:product_categories"`
}
