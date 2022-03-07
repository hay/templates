<?php
    class Vite {
        public array $scripts;
        public array $styles;
        public string $entryPath;
        public string $manifestPath;

        private string $manifestDir;

        public function __construct(array $opts) {
            if (empty($opts["manifestPath"])) {
                throw new Exception("No manifest given");
            }

            if (empty($opts["entryPath"])) {
                throw new Exception("No entry given");
            }

            $this->entryPath = $opts["entryPath"];
            $this->manifestPath = $opts["manifestPath"];

            $pathinfo = pathinfo($this->manifestPath);
            $this->manifestDir = basename($pathinfo["dirname"]);
            $this->parseManifest();
        }

        private function parseManifest():void {
            if (!file_exists($this->manifestPath)) {
                throw new Exception("Manifest is not available via $this->manifestPath");
            }

            $manifest = json_decode(file_get_contents($this->manifestPath));

            foreach ($manifest as $key => $file) {
                if ($file->file) {
                    $this->scripts[] = $this->manifestDir . "/" . $file->file;
                }

                if (isset($file->css)) {
                    foreach ($file->css as $style) {
                        $this->styles[] = $this->manifestDir . "/". $style;
                    }
                }
            }
        }
    }