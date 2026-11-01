# App update publishing

The app checks `EXPO_PUBLIC_UPDATE_MANIFEST_URL` once when it starts. Set that variable to the public HTTPS URL of `version.json` before building the APK (for example, `https://YOUR-VERCEL-DOMAIN/version.json`).

Publish the signed APK as a GitHub Release asset with a stable download URL. Then edit `public/version.json` for every release:

- `version`: human-readable app version
- `versionCode`: integer greater than the installed app's Android versionCode
- `apkUrl`: direct HTTPS URL to the signed APK asset
- `releaseNotes`: optional short description

Commit and deploy the website to Vercel after updating the manifest. Build the Android app with `EXPO_PUBLIC_UPDATE_MANIFEST_URL` set to the deployed manifest URL. The app opens the APK URL when the user taps Update Now; Android still asks the user to approve installation. Keep the same Android package name and signing keystore for updates.

The placeholder GitHub URL in `public/version.json` MUST be replaced with the actual GitHub owner/repository and release asset URL before public use.
