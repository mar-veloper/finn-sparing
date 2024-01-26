import { NextRequest, NextResponse } from 'next/server'
import banksJson from './banksparing.json'

export async function GET(req: NextRequest) {
  const banks = banksJson
  let BankType = {}
  const properties = Object.keys(banks[0])

  properties.forEach((property) => {
    BankType = {
      ...BankType,
      [property]: getObjectPropertyTypes(banks, property),
    }
  })

  return NextResponse.json(BankType)
}
