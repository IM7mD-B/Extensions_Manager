import { Switch } from "@headlessui/react"
import { useState } from "react"

export default function Switch_btn () {

    const [enabled, setEnabled] = useState(false)

    return (

        <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-red-600"
        >
            <span className= "size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-7"/>

        </Switch>

    )
}