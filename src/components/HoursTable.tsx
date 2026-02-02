import { site } from "@/content/site";

export function HoursTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Opening hours</caption>
        <thead className="border-b border-white/10">
          <tr>
            <th scope="col" className="px-6 py-4 font-semibold text-white/80">
              Day
            </th>
            <th scope="col" className="px-6 py-4 font-semibold text-white/80">
              Hours
            </th>
          </tr>
        </thead>
        <tbody>
          {site.hours.schedule.map((row) => (
            <tr key={row.label.en} className="border-b border-white/5 last:border-0">
              <th scope="row" className="px-6 py-4 font-semibold text-white">
                <span>{row.label.en}</span>
                {row.label.am ? (
                  <span className="ml-2 text-xs font-normal text-white/55" lang="am">
                    {row.label.am}
                  </span>
                ) : null}
              </th>
              <td className="px-6 py-4 text-white/75">{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
