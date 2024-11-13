@echo off

echo *** 
echo *** BEGIN: GHArchive GZ to Parquet Conversion
echo *** Started at: %date% %time%
echo ***

set "start=%time%"

REM Validate required arguments
if "%~1"=="" goto help
if "%~2"=="" goto help 
if "%~3"=="" goto help

REM Get command line arguments
set "source=%~1"
set "target=%~2"
set "orgfile=%~3"

REM Set optional arguments with defaults
if "%~4"=="" (
    for %%I in ("%source%") do set "sourcename=%%~nxI"
    set "logs=%target%\gharchive-gz-to-parquet-%sourcename%.csv"
) else (
    set "logs=%~4"
)

if "%~5"=="" (
    for %%I in ("%source%") do set "sourcename=%%~nxI"
    set "pylogs=%target%\gharchive-gz-to-parquet-pylog-%sourcename%.log"
) else (
    set "pylogs=%~5"
)

if "%~6"=="" (
    set workers=55
) else (
    set "workers=%~6"
)

REM Run conversion
echo Running conversion with:
echo Source: %source%
echo Target: %target%
echo Org File: %orgfile%
echo Logs: %logs%
echo Python Logs: %pylogs%
echo Workers: %workers%
echo.

if not exist "%target%" (
    echo Creating target directory: %target%
    mkdir "%target%"
)

REM Remove the redirection to allow console output while still logging
echo python gharchive-gz-to-parquet.py --source %source% --target %target% --org-file %orgfile% --log-results %logs% --verbose --workers %workers%
python gharchive-gz-to-parquet.py --source %source% --target %target% --org-file %orgfile% --log-results %logs% --verbose --workers %workers%

REM Calculate duration
set "stop=%time%"
set /a "secs=1%stop:~6,2% - 1%start:~6,2% + (1%stop:~3,2% - 1%start:~3,2%) * 60 + (1%stop:~0,2% - 1%start:~0,2%) * 60"
echo.
echo *** 
echo *** END: Conversion completed
echo *** Duration: %secs% seconds
echo *** Finished at: %date% %time%
echo ***
exit /b

:help
echo GHArchive GZ to Parquet Conversion Script
echo.
echo Usage:
echo %~nx0 source target orgfile [logs] [pylogs] [workers]
echo.
echo Required arguments:
echo   source    Path to source GZ data files
echo   target    Path for output Parquet files
echo   orgfile   Path to organization list file
echo.
echo Optional arguments:
echo   logs      Path to save results log CSV 
echo            (default: target\gharchive-gz-hour2day-YYYYMMDD.csv)
echo   pylogs    Path to save Python output log
echo            (default: target\gharchive-gz-hour2day-pylog-YYYYMMDD.log)
echo   workers   Number of parallel workers (default: 55)
echo.
echo Example:
echo %~nx0 "p:\gha-raw-daily\2024" "p:\gha-parquet-daily\2024" "org-list-cncf.txt"

REM exit /b 1 returns error code 1 to calling process to indicate help was shown
REM due to missing required arguments or explicit help request
exit /b 1
