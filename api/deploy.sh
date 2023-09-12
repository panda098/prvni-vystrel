rm -rf vendor
rm -rf var/cache/*
rm -rf var/log/*
SET APP_ENV=prod
composer install --no-dev --optimize-autoloader
composer dump-autoload --optimize --no-dev --classmap-authoritative