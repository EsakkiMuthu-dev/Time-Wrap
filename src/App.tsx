/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JhUn4EyqtaX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import { Toggle } from "@radix-ui/react-toggle";

export default function Component() {
  return (
    <div className="grid gap-12 px-4 py-12 md:gap-24 lg:px-8 xl:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            YouTube Playlist Analyzer
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
            Analyze the playback time for different speeds in a YouTube
            playlist.
          </p>
        </div>
        <div className="w-full max-w-[500px] grid gap-4">
          <div className="relative flex items-center gap-2">
            <Input
              className="max-w-none flex-1"
              placeholder="Enter a YouTube playlist URL"
              type="url"
            />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 text-sm">
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Playlist Details</h2>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <div className="flex items-center gap-2">
              <img
                alt="Thumbnail"
                className="rounded aspect-square object-cover"
                height={120}
                src="/placeholder.svg"
                width={120}
              />
              <div className="grid gap-1">
                <h3 className="font-medium line-clamp-2">
                  Vercel Ship Keynote: Introducing the frontend cloud
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  1.2M views · 2 months ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                alt="Thumbnail"
                className="rounded aspect-square object-cover"
                height={120}
                src="/placeholder.svg"
                width={120}
              />
              <div className="grid gap-1">
                <h3 className="font-medium line-clamp-2">
                  Using Vercel KV with Svelte
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  21K views · 1 week ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Analysis Results</h2>
          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-1">
              <h3 className="font-medium">1.25x</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 hours, 30 minutes
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="font-medium">1.5x</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 hours, 0 minutes
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="font-medium">1.75x</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                1 hours, 43 minutes
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="font-medium">2x</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                1 hours, 30 minutes
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Custom Speed</h2>
          <div className="flex items-center gap-2">
            <Input
              max={4}
              min={0}
              placeholder="Enter custom speed"
              step={0.25}
              type="number"
            />
            <Button>Update</Button>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Adjusted Time</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            The adjusted playback time for the custom speed will be displayed
            here.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <Toggle aria-label="Toggle dark mode" />
        <span className="text-gray-600 dark:text-gray-400">Dark Mode</span>
      </div>
    </div>
  );
}
