@echo off

echo *** 
echo *** BEGIN
echo ***

set "start=%time%"

REM Get command line arguments  
set "source=%~1"
set "target=%~2"
set "orgfile=%~3"
set "logs=%~4"
set "pylogs=%~5"
set "workers=%~6"

if "%logs%"=="" (
  set "logs=%target%\gha-osrb-%source:~0,8%.csv"
)

if "%pylogs%"=="" (
  set "pylogs=%target%\gha-osrb-pylog-%source:~0,8%.log" 
)

if "%workers%"=="" (
  set workers=55
)

python gha-osrb.py --source %source% --target %target% --org-file %orgfile% --log-results %logs% --verbose --workers %workers% > %pylogs% 2>&1

set "stop=%time%"
set /a "secs=1%stop:~6,2% - 1%start:~6,2% + (1%stop:~3,2% - 1%start:~3,2%) * 60 + (1%stop:~0,2% - 1%start:~0,2%) / 60"
echo Duration: %secs% seconds

@echo off
echo ***
echo *** END
echo ***

REM Help text
if "%~1"=="/?" goto help
exit /b

:help
echo Usage:
echo %0 source target orgfile [logs] [pylogs] [workers]
echo Required:
echo   source: Path to source data 
echo   target: Path for output data
echo   orgfile: Path to org list file
echo Optional:
echo   logs: Path to save results log CSV (default is gha-osrb-source-target.csv)
echo   pylogs: Path to save python output log (default is gha-osrb-pylog-source-target.log) 
echo   workers: Number of workers (default is 55)
