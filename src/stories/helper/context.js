import { merge } from '@laufire/utils/collection';
import context from '../../core/context';
import normalizeConfig from '../../services/normalizeConfig';

merge(context,
	{
		config: normalizeConfig.normalizeSprite(context),
		state: context.seed,
	});

export default context;
