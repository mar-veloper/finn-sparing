'use client'
import Link from 'next/link'
import { If } from 'react-if'
import { parseAsInteger, useQueryState } from 'nuqs'
import { useRouter } from 'next/navigation'

const ButtonsContainer = () => {
  const [step, setStep] = useQueryState('step', parseAsInteger.withDefault(1))

  const router = useRouter()

  const handleNextStep = () => {
    const query = new URLSearchParams(window.location.search)

    if (step === 3) {
      return router.push('/banksparinger' + '?' + query.toString())
    }

    return setStep(step + 1)
  }

  return (
    <div className="artboard artboard-horizontal !h-16 mt-0 phone-4 flex justify-between items-center ">
      <Link
        href="/banksparinger"
        className="text-sm underline hover:text-secondary"
      >
        Hopp over (Se alle produkter)
      </Link>
      <div className="flex gap-5">
        <If condition={step > 1}>
          <button
            onClick={() => setStep(step - 1)}
            className="btn text-neutral btn-neutral bg-transparent border-none shadow-none hover:text-accent hover:bg-transparent"
          >
            Tilbake
          </button>
        </If>
        <button
          onClick={handleNextStep}
          className="btn text-white btn-secondary hover:bg-transparent border-secondary hover:text-secondary"
        >
          {step === 3 ? 'Se resultat' : 'Neste steg'}
        </button>
      </div>
    </div>
  )
}

export default ButtonsContainer
