type AvailablePillProps = {
  available: boolean
  label: string
}

export function AvailablePill({ available, label }: AvailablePillProps) {
  return (
    <div className="mb-4 inline-flex flex-row items-center rounded-full bg-[#262629] px-4 py-2 text-xs text-white">
      <span
        className="mr-2 inline-block h-2 w-2 rounded-full"
        style={{
          backgroundColor: available ? "lightgreen" : "red",
          boxShadow: available
            ? "0 0 8px rgba(0, 255, 0, 0.5)"
            : "0 0 8px rgba(255, 0, 0, 0.5)",
        }}
      />
      {label}
    </div>
  )
}
