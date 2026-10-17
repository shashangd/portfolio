@echo off
echo ========================================================
echo Copying Cropped Profile Photo to Portfolio Assets Folder
echo ========================================================
echo.

set "SOURCE_IMAGE=C:\Users\30141052\.gemini\antigravity\brain\c3bf7469-1133-4966-ae02-62ba37a0c7fc\profile_cropped_1792219376768.png"

if not exist "%SOURCE_IMAGE%" (
    echo Error: Source image file not found at:
    echo %SOURCE_IMAGE%
    echo.
    pause
    exit /b 1
)

if not exist "assets" (
    mkdir "assets"
)

copy /Y "%SOURCE_IMAGE%" "assets\profile.png" > nul
copy /Y "%SOURCE_IMAGE%" "assets\profile.jpg" > nul

echo [SUCCESS] Profile photo copied successfully:
echo   - assets\profile.png
echo   - assets\profile.jpg
echo.
echo Your portfolio is now 100%% ready with your real portrait photo!
echo.
pause
