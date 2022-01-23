.PHONY: build

build: clean
	yarn build

deploy:
	aws s3 cp build/ s3://mc-speed-limit --recursive

clean:
	rm -rf ./build