package main

import (
	"fmt"
)

type Session struct {
	RollNum string `json:"roll_num"`
	Name    string `json:"name"`
}

func NewSession() *Session {
	return &Session{RollNum: "", Name: ""}
}

func (s *Session) GetSession() Session {
	return *s
}

func (s *Session) SetSession(rollNum, name string) error {
	if s.RollNum != "" || s.Name != "" {
		return fmt.Errorf("previous session already active. remove that first")
	}
	s.Name = name
	s.RollNum = rollNum
	return nil
}

func (s *Session) DeleteSession() {
	s.Name = ""
	s.RollNum = ""
}
