export interface IPackage {
  company_name?: string;
  image?: string;
  product_name?: string;
  switch?: boolean;
  from?: string;
}

export interface PackageState {
  itemInfo: Record<string, IPackage>;
  payment: string;
  desc: string;
  weightvalue: number;
  piecevalue: number;
  packages: [];
}

export interface GetPackageResponse {
  package: IPackage;
  success: boolean;
}
