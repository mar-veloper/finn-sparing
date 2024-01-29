import { Bank } from '@/app/hooks/useBanks/bank.types'
import { useBanks } from '@/app/hooks/useBanks'
import classNames from 'classnames'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'
import { If } from 'react-if'
const ProductDetail = () => {
  const { banks } = useBanks()

  const defaultProductToShow = parseAsString.withDefault(
    banks.data[0]?.id || ''
  )
  const [productToShow] = useQueryState('productToShow', defaultProductToShow)

  const [product, setProduct] = useState<Bank>(banks.data[0])

  useEffect(() => {
    const product = banks.data.find((bank) => bank.id === productToShow)
    setProduct(product as Bank)
  }, [productToShow, banks.data])

  if (!product) return null

  const info = [
    {
      label: 'Leverandør',
      value: product.bankName,
    },
    {
      label: 'Markedsområde',
      value: product.marketArea,
    },
    {
      label: 'Produktnavn',
      value: product.name,
    },
    {
      label: 'Krav om annet produkt?',
      value: product.isPackageNotNeeded ? 'Nei' : 'Ja',
    },
    {
      label: 'Produktpakke',
      value: product.productPackage,
    },
    {
      label: 'Forutsetter medlemskap?',
      value: product.membership ? 'Ja' : 'Nei',
    },
    {
      label: 'Gruppe',
      value: product.group
        ? product.group
            .split('_')
            .join(' ')
            .toLowerCase()
            .replace(/(?:^|\s)\S/g, function (a) {
              return a.toUpperCase()
            })
        : 'Ingen',
    },
    {
      label: 'Må være student?',
      value: product.isStudent ? 'Ja' : 'Nei',
    },
    {
      label: 'Må være pensjonist?',
      value: product.isPensionist ? 'Ja' : 'Nei',
    },
    {
      label: 'Alder fra',
      value: '18 år',
    },
    {
      label: 'Alder til',
      value: '33 år',
    },
    {
      label: 'Minimumsinnskudd',
      value: 'Ubegrenset',
    },
    {
      label: 'Totalt maksimalt innskudd',
      value: 'Ubegrenset',
    },
    {
      label: 'Andre betingelser',
      value: '',
    },
    {
      label: 'Krav om månedlig sparing?',
      value: 'Nei',
    },
    {
      label: 'Frie uttak pr. år',
      value: 'Ubegrenset',
    },
    {
      label: 'Kapitaliseringsperiode',
      value: 'Årlig',
    },
    {
      label: 'Type trapperente',
      value: 'Nei',
    },
    {
      label: 'Rentesats 1 (nominell)',
      value: '0,00 %',
    },
    {
      label: 'Beløp rentesats gjelder fra',
      value: '0 kr',
    },
    {
      wrap: true,
      label: 'Sikret innskuddbeløp',
      value:
        'Innskudd opptil 100.000 euro dekkes av den finske innskuddsgaranti-ordningen. Innskudd i den norske filialen som overstiger 100.000 euro dekkes av den norske innskuddsgarantien opp til 2 millioner norske kroner i sum for den enkelte innskyter.',
    },
    {
      wrap: true,
      label: 'Innskuddsikringsordning',
      value:
        'Innskudd opptil 100.000 euro dekkes av den finske innskuddsgaranti-ordningen. Innskudd i den norske filialen som overstiger 100.000 euro dekkes av den norske innskuddsgarantien opp til 2 millioner norske kroner i sum for den enkelte innskyter.',
    },
  ]

  return (
    <ul className="mb-10">
      {info.map((item, index) => (
        <If key={index} condition={item.value !== null}>
          <li>
            <div
              className={classNames({
                'py-2': true,
                'flex justify-between': !item.wrap,
              })}
            >
              <span
                className={classNames({
                  'text-sm font-bold flex-1': true,
                })}
              >
                {item.label}
              </span>
              <p
                className={classNames({
                  'text-md text-right flex-1': !item.wrap,
                  'mt-2': item.wrap,
                })}
              >
                {item.value}
              </p>
            </div>
            <hr />
          </li>
        </If>
      ))}
    </ul>
  )
}

export default ProductDetail
