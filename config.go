package main

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"

	"github.com/adrg/xdg"
)

type Config struct {
	DocPath  string `json:"doc_path"`
	SchoolID string `json:"school_id"`
}

func NewConfig() (*Config, error) {
	cfg := &Config{}
	f, err := xdg.ConfigFile("wailspoc/config.json")
	if err != nil {
		return nil, fmt.Errorf("could not resolve path for config file %w", err)
	}

	dir, filename := filepath.Split(f)
	if len(dir) == 0 {
		dir = "."
	}

	buf, err := fs.ReadFile(os.DirFS(dir), filename)
	if err != nil {
		return nil, err
	}

	if len(buf) > 0 {
		if err := json.Unmarshal(buf, &cfg); err != nil {
			return nil, err
		}

		return cfg, nil
	}

	return &Config{}, nil
}

func (r *Config) SetDocPath(docPath string) error {
	r.DocPath = docPath

	f, err := xdg.ConfigFile("wailspoc/config.json")
	if err != nil {
		return fmt.Errorf("could not resolve path for config file %w", err)
	}

	b, err := json.Marshal(r)
	if err != nil {
		return err
	}

	wf, err := os.Create(f)
	if err != nil {
		return err
	}

	_, err = wf.Write(b)
	if err != nil {
		return err
	}

	return nil
}

func (r Config) GetDocPath() string {
	return r.DocPath
}
