# Daily Life Planner website deployment notes

## Current status
- Next.js website source is in this `website/` directory.
- App icon is included at `website/public/app-icon.png` and used as the site icon/brand image.
- APK download stays hidden until `NEXT_PUBLIC_APK_URL` is configured.
- The app update manifest must point to the final public `version.json` URL before building the app.

## Vercel
1. Push this project to the intended GitHub repository.
2. In Vercel, import that repository.
3. Set **Root Directory** to `website`.
4. Add `NEXT_PUBLIC_APK_URL` after publishing the signed APK as a GitHub Release asset.
5. Deploy and verify `/`, `/privacy`, `/support`, and `/version.json`.

## GitHub Releases and in-app updates
1. Publish the signed APK as a GitHub Release asset (keep the Android package name and EAS signing keystore unchanged).
2. Update `website/public/version.json` with the new version, higher Android `versionCode`, direct APK asset URL, and release notes.
3. Set `EXPO_PUBLIC_UPDATE_MANIFEST_URL` in the Expo build environment to `https://YOUR-VERCEL-DOMAIN/version.json` before building the APK.
4. Build and install the APK as an update over the existing app. Do not uninstall the existing app.

Do not publish until the support contact and privacy policy have been reviewed against the actual release.
