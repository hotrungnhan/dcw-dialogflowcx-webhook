abstract class Builder<T> {
	protected data: T = {} as T;
	build(): T {
		return this.data;
	}
}

export { Builder };
