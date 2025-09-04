# Portoflio

## Instalación
Para correr docker compose en develop:
```
docker compose up -d
```
Para correr docker compose en production:
```
docker compose -f docker-compose.prod.yml up -d
```
Si hay cambios en el package y se instalan dependencias actualizar con
```
docker compose down
docker compose up --build -d
```

## Puertos
- 8082: Habilitado cuando se corre develop
- 80: Habilitado cuando se corre producción